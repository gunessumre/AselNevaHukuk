// Dosya sistemine erişim için
const fs = require('fs');
const path = require('path');

// Değiştirilecek değerler
const oldUrl = 'aselnevahukuk.com';
const newUrl = 'aselaselnevahukuk.com';

// Göz ardı edilecek dizinler/dosyalar
const excludeDirs = ['.git', '.next', 'node_modules', 'out', 'public'];
const excludeFiles = ['.DS_Store', '.env', '.env.local', 'yarn.lock', 'package-lock.json'];

// Sadece bu uzantıları olan dosyaları işle
const includeExtensions = ['.ts', '.tsx', '.js', '.jsx', '.json', '.md', '.mdx', '.html'];

// Dizin içindeki tüm dosyaları recursive olarak tarar
function traverseDirectory(currentDir) {
  try {
    const files = fs.readdirSync(currentDir);
    
    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stats = fs.statSync(filePath);
      
      // Dizin ise ve exclude listesinde değilse, içine gir
      if (stats.isDirectory() && !excludeDirs.includes(file)) {
        traverseDirectory(filePath);
      } 
      // Dosya ise ve exclude listesinde değilse işle
      else if (stats.isFile() && !excludeFiles.includes(file)) {
        const ext = path.extname(file);
        if (includeExtensions.includes(ext)) {
          replaceInFile(filePath);
        }
      }
    }
  } catch (err) {
    console.error(`Dizin taranırken hata oluştu: ${currentDir}`, err);
  }
}

// Dosya içindeki değerleri değiştirir
function replaceInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Değiştirme işlemi
    if (content.includes(oldUrl)) {
      const newContent = content.replace(new RegExp(oldUrl, 'g'), newUrl);
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`URL güncellendi: ${filePath}`);
    }
  } catch (err) {
    console.error(`Dosya işlenirken hata oluştu: ${filePath}`, err);
  }
}

// Ana fonksiyon
function updateUrls() {
  console.log('URL güncelleme işlemi başlıyor...');
  console.log(`${oldUrl} --> ${newUrl}`);
  
  // Proje kök dizininden başla
  const rootDir = path.resolve('.');
  traverseDirectory(rootDir);
  
  console.log('URL güncelleme işlemi tamamlandı!');
}

// Scripti çalıştır
updateUrls(); 