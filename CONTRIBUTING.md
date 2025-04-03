# Katkıda Bulunma Rehberi

Bu projeye katkıda bulunmak istediğiniz için teşekkür ederiz! İşte katkıda bulunma sürecinizde size yardımcı olacak bazı yönergeler.

## Geliştirme Ortamı Kurulumu

1. Projeyi fork edin
2. Yerel makinenize klonlayın:
   ```bash
   git clone https://github.com/your-username/nginx-docker-cicd.git
   cd nginx-docker-cicd
   ```
3. Gerekli ortam değişkenlerini ayarlayın:
   ```bash
   cp .env.example .env
   ```
4. Docker Compose ile uygulamayı başlatın:
   ```bash
   docker-compose up -d
   ```

## Katkıda Bulunma Süreci

1. Yeni bir branch oluşturun:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Değişikliklerinizi yapın ve commit edin:
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

3. Branch'inizi push edin:
   ```bash
   git push origin feature/your-feature-name
   ```

4. Pull Request oluşturun

## Commit Mesajları

Commit mesajlarınızı aşağıdaki formatı kullanarak yazın:
- `feat:` Yeni özellik
- `fix:` Hata düzeltmesi
- `docs:` Dokümantasyon değişiklikleri
- `style:` Kod formatı değişiklikleri
- `refactor:` Kod yeniden düzenleme
- `test:` Test ekleme veya düzenleme
- `chore:` Genel bakım

## Kod Standartları

- Kodunuzu ESLint ve Prettier ile formatlayın
- Tüm yeni özellikler için test yazın
- Dokümantasyonu güncelleyin
- Pull Request açmadan önce testleri çalıştırın

## Güvenlik

Güvenlik açığı bulduğunuzda, lütfen doğrudan issue açmak yerine security@example.com adresine e-posta gönderin.

## Sorular

Herhangi bir sorunuz varsa, lütfen bir issue açın veya discussions bölümünde sorun.

Teşekkür ederiz! 