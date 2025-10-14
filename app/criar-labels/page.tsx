'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import ReactCrop, { Crop, PixelCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { jsPDF } from 'jspdf';

interface ImageData {
  src: string;
  crop?: Crop;
  croppedImageUrl?: string;
}

export default function CriarLabelsPage() {
  const [capaFrente, setCapaFrente] = useState<ImageData | null>(null);
  const [capaVerso, setCapaVerso] = useState<ImageData | null>(null);
  const [labelA, setLabelA] = useState<ImageData | null>(null);
  const [labelB, setLabelB] = useState<ImageData | null>(null);
  const [currentEditing, setCurrentEditing] = useState<'capaFrente' | 'capaVerso' | 'labelA' | 'labelB' | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const imgRef = useRef<HTMLImageElement>(null);

  const handleImageUpload = (file: File, type: 'capaFrente' | 'capaVerso' | 'labelA' | 'labelB') => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageData: ImageData = {
        src: e.target?.result as string,
        crop: { unit: '%', x: 25, y: 25, width: 50, height: 50 }
      };
      
      if (type === 'capaFrente') setCapaFrente(imageData);
      if (type === 'capaVerso') setCapaVerso(imageData);
      if (type === 'labelA') setLabelA(imageData);
      if (type === 'labelB') setLabelB(imageData);
      
      setCurrentEditing(type);
    };
    reader.readAsDataURL(file);
  };

  const handleCropComplete = async (crop: PixelCrop) => {
    if (!imgRef.current || !currentEditing) return;
    
    const image = imgRef.current;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    canvas.width = crop.width;
    canvas.height = crop.height;

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    // Se for label, aplicar máscara circular
    if (currentEditing.startsWith('label')) {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(canvas.width, canvas.height) / 2;
      
      for (let y = 0; y < canvas.height; y++) {
        for (let x = 0; x < canvas.width; x++) {
          const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
          if (distance > radius) {
            const pixelIndex = (y * canvas.width + x) * 4;
            imageData.data[pixelIndex + 3] = 0; // Tornar transparente
          }
        }
      }
      ctx.putImageData(imageData, 0, 0);
    }

    const croppedImageUrl = canvas.toDataURL('image/png');
    
    const updateImage = (prev: ImageData | null) => 
      prev ? { ...prev, croppedImageUrl } : null;
    
    if (currentEditing === 'capaFrente') setCapaFrente(updateImage);
    if (currentEditing === 'capaVerso') setCapaVerso(updateImage);
    if (currentEditing === 'labelA') setLabelA(updateImage);
    if (currentEditing === 'labelB') setLabelB(updateImage);
  };

  const generatePDF = async () => {
    if (!capaFrente?.croppedImageUrl || !capaVerso?.croppedImageUrl || 
        !labelA?.croppedImageUrl || !labelB?.croppedImageUrl) {
      alert('Por favor, faça o crop de todas as 4 imagens antes de gerar o PDF!');
      return;
    }

    setIsGenerating(true);

    try {
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'cm',
        format: 'a4'
      });

      // Página 1 - Capa Frente (18.5 x 18.5 cm)
      pdf.setFillColor(255, 255, 255);
      pdf.rect(0, 0, 21, 29.7, 'F');
      pdf.addImage(capaFrente.croppedImageUrl, 'PNG', 1.25, 5, 18.5, 18.5);
      pdf.setFontSize(10);
      pdf.setTextColor(100, 100, 100);
      pdf.text('Capa Frente - 18.5 x 18.5 cm', 10.5, 25, { align: 'center' });
      pdf.text('Corte nas linhas pontilhadas', 10.5, 26, { align: 'center' });

      // Página 2 - Capa Verso (18.5 x 18.5 cm)
      pdf.addPage();
      pdf.setFillColor(255, 255, 255);
      pdf.rect(0, 0, 21, 29.7, 'F');
      pdf.addImage(capaVerso.croppedImageUrl, 'PNG', 1.25, 5, 18.5, 18.5);
      pdf.setFontSize(10);
      pdf.setTextColor(100, 100, 100);
      pdf.text('Capa Verso - 18.5 x 18.5 cm', 10.5, 25, { align: 'center' });
      pdf.text('Corte nas linhas pontilhadas', 10.5, 26, { align: 'center' });

      // Página 3 - Label A (9 cm diâmetro)
      pdf.addPage();
      pdf.setFillColor(255, 255, 255);
      pdf.rect(0, 0, 21, 29.7, 'F');
      pdf.addImage(labelA.croppedImageUrl, 'PNG', 6, 8, 9, 9);
      pdf.setFontSize(10);
      pdf.setTextColor(100, 100, 100);
      pdf.text('Rótulo A - Ø 9 cm', 10.5, 19, { align: 'center' });
      pdf.text('Recorte em formato circular', 10.5, 20, { align: 'center' });

      // Página 4 - Label B (9 cm diâmetro)
      pdf.addPage();
      pdf.setFillColor(255, 255, 255);
      pdf.rect(0, 0, 21, 29.7, 'F');
      pdf.addImage(labelB.croppedImageUrl, 'PNG', 6, 8, 9, 9);
      pdf.setFontSize(10);
      pdf.setTextColor(100, 100, 100);
      pdf.text('Rótulo B - Ø 9 cm', 10.5, 19, { align: 'center' });
      pdf.text('Recorte em formato circular', 10.5, 20, { align: 'center' });

      pdf.save('vitrola-labels.pdf');
      alert('PDF gerado com sucesso! 🎉');
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      alert('Erro ao gerar PDF. Tente novamente.');
    } finally {
      setIsGenerating(false);
    }
  };

  const getCurrentImage = () => {
    if (currentEditing === 'capaFrente') return capaFrente;
    if (currentEditing === 'capaVerso') return capaVerso;
    if (currentEditing === 'labelA') return labelA;
    if (currentEditing === 'labelB') return labelB;
    return null;
  };

  const updateCurrentCrop = (crop: Crop) => {
    const updateFn = (prev: ImageData | null) => prev ? { ...prev, crop } : null;
    
    if (currentEditing === 'capaFrente') setCapaFrente(updateFn);
    if (currentEditing === 'capaVerso') setCapaVerso(updateFn);
    if (currentEditing === 'labelA') setLabelA(updateFn);
    if (currentEditing === 'labelB') setLabelB(updateFn);
  };

  const currentImage = getCurrentImage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-wood-50 via-amber-50 to-orange-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-7xl mb-4">🎨</div>
          <h1 className="text-5xl font-display font-bold mb-4 gradient-text">
            Gerador de Labels e Capas
          </h1>
          <p className="text-xl text-vinyl-700 max-w-3xl mx-auto">
            Faça upload de suas imagens, ajuste o crop e gere um PDF pronto para impressão!
          </p>
        </div>

        {/* Upload Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Capa Frente */}
          <div className="card-happy p-6">
            <h3 className="text-2xl font-bold mb-4 text-vinyl-900 flex items-center gap-2">
              📄 Capa Frente
              {capaFrente?.croppedImageUrl && <span className="text-green-600 text-lg">✓</span>}
            </h3>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => e.target.files?.[0] && handleImageUpload(e.target.files[0], 'capaFrente')}
              className="mb-4 w-full"
            />
            {capaFrente?.croppedImageUrl && (
              <img src={capaFrente.croppedImageUrl} alt="Capa Frente" className="w-full h-48 object-contain border-2 border-gray-200 rounded" />
            )}
          </div>

          {/* Capa Verso */}
          <div className="card-happy p-6">
            <h3 className="text-2xl font-bold mb-4 text-vinyl-900 flex items-center gap-2">
              📄 Capa Verso
              {capaVerso?.croppedImageUrl && <span className="text-green-600 text-lg">✓</span>}
            </h3>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => e.target.files?.[0] && handleImageUpload(e.target.files[0], 'capaVerso')}
              className="mb-4 w-full"
            />
            {capaVerso?.croppedImageUrl && (
              <img src={capaVerso.croppedImageUrl} alt="Capa Verso" className="w-full h-48 object-contain border-2 border-gray-200 rounded" />
            )}
          </div>

          {/* Label A */}
          <div className="card-happy p-6">
            <h3 className="text-2xl font-bold mb-4 text-vinyl-900 flex items-center gap-2">
              💿 Rótulo A
              {labelA?.croppedImageUrl && <span className="text-green-600 text-lg">✓</span>}
            </h3>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => e.target.files?.[0] && handleImageUpload(e.target.files[0], 'labelA')}
              className="mb-4 w-full"
            />
            {labelA?.croppedImageUrl && (
              <img src={labelA.croppedImageUrl} alt="Label A" className="w-48 h-48 object-contain border-2 border-gray-200 rounded-full mx-auto" />
            )}
          </div>

          {/* Label B */}
          <div className="card-happy p-6">
            <h3 className="text-2xl font-bold mb-4 text-vinyl-900 flex items-center gap-2">
              💿 Rótulo B
              {labelB?.croppedImageUrl && <span className="text-green-600 text-lg">✓</span>}
            </h3>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => e.target.files?.[0] && handleImageUpload(e.target.files[0], 'labelB')}
              className="mb-4 w-full"
            />
            {labelB?.croppedImageUrl && (
              <img src={labelB.croppedImageUrl} alt="Label B" className="w-48 h-48 object-contain border-2 border-gray-200 rounded-full mx-auto" />
            )}
          </div>
        </div>

        {/* Crop Editor */}
        {currentEditing && currentImage && (
          <div className="card-happy p-8 mb-12">
            <h3 className="text-3xl font-bold mb-6 text-vinyl-900 text-center">
              ✂️ Ajustar Recorte - {
                currentEditing === 'capaFrente' ? 'Capa Frente' :
                currentEditing === 'capaVerso' ? 'Capa Verso' :
                currentEditing === 'labelA' ? 'Rótulo A' : 'Rótulo B'
              }
            </h3>
            
            <div className="max-w-3xl mx-auto">
              <ReactCrop
                crop={currentImage.crop}
                onChange={(c) => updateCurrentCrop(c)}
                onComplete={(c) => handleCropComplete(c)}
                aspect={1}
                circularCrop={currentEditing.startsWith('label')}
              >
                <img
                  ref={imgRef}
                  src={currentImage.src}
                  alt="Crop preview"
                  style={{ maxWidth: '100%' }}
                />
              </ReactCrop>
            </div>

            <div className="text-center mt-6">
              <button
                onClick={() => setCurrentEditing(null)}
                className="btn-happy bg-gradient-to-r from-vinyl-700 to-vinyl-900"
              >
                Concluir Ajuste ✓
              </button>
            </div>
          </div>
        )}

        {/* Generate PDF Button */}
        <div className="text-center">
          <button
            onClick={generatePDF}
            disabled={!capaFrente?.croppedImageUrl || !capaVerso?.croppedImageUrl || 
                      !labelA?.croppedImageUrl || !labelB?.croppedImageUrl || isGenerating}
            className={`btn-happy text-2xl px-12 py-6 ${
              capaFrente?.croppedImageUrl && capaVerso?.croppedImageUrl && 
              labelA?.croppedImageUrl && labelB?.croppedImageUrl
                ? 'bg-gradient-to-r from-green-500 to-green-700'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            {isGenerating ? '⏳ Gerando PDF...' : '📄 Gerar PDF Completo'}
          </button>
          <p className="text-sm text-vinyl-600 mt-4">
            {!capaFrente?.croppedImageUrl || !capaVerso?.croppedImageUrl || 
             !labelA?.croppedImageUrl || !labelB?.croppedImageUrl
              ? '⚠️ Faça o crop de todas as 4 imagens primeiro'
              : '✓ Pronto para gerar o PDF!'}
          </p>
        </div>

        {/* Back Button */}
        <div className="text-center mt-12">
          <Link href="/" className="btn-happy bg-gradient-to-r from-vinyl-700 to-vinyl-900">
            ← Voltar para Início
          </Link>
        </div>
      </div>
    </div>
  );
}
