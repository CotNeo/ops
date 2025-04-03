# Nginx Docker CI/CD Demo

Modern web uygulaması için Nginx, Docker ve CI/CD pipeline örneği.

## Özellikler

- 🚀 Nginx web sunucusu
- 🐳 Docker konteynerizasyonu
- 🔄 CI/CD pipeline
- 📊 Monitoring ve metrikler
- 🔒 Güvenlik önlemleri
- 📝 Detaylı dokümantasyon

## Gereksinimler

- Docker Engine v20.10+
- Docker Compose v2.0+
- Git

## Kurulum

1. Projeyi klonlayın:
```bash
git clone https://github.com/CotNeo/ops.git
cd ops
```

2. Ortam değişkenlerini ayarlayın:
```bash
cp .env.example .env
nano .env
```

3. Docker imajını oluşturun:
```bash
docker-compose build
```

4. Uygulamayı başlatın:
```bash
docker-compose up -d
```

## Kullanım

### Health Check
```bash
curl http://localhost:8080/health
```

### Metrics
```bash
curl http://localhost:8080/metrics
```

### Loglar
```bash
docker-compose logs -f
```

## API Referansı

### Health Check Endpoint
```
GET /health
```
Response:
```json
{
    "status": "healthy",
    "uptime": "2h 30m",
    "version": "1.0.0"
}
```

### Metrics Endpoint
```
GET /metrics
```
Response:
```
nginx_connections_active 10
nginx_http_requests_total 1234
```

## Güvenlik

- Rate limiting
- Güvenlik başlıkları
- SSL/TLS şifreleme
- IP bazlı erişim kontrolü

## Monitoring

- Gerçek zamanlı metrikler
- Uptime izleme
- Log analizi
- Performans grafikleri

## Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## Eksik Kalan Noktalar:

SSL/TLS sertifikaları için konfigürasyon
Daha detaylı test senaryoları
Monitoring dashboard'ları
Backup ve recovery planı

##Geliştirme:

SSL/TLS sertifikaları için Let's Encrypt kullanılabilir
Test senaryoları için Jest veya Mocha kullanılabilir
Monitoring için örnek Grafana dashboard'ları eklenebilir
Backup için cron job'lar eklenebilir

## İletişim

- GitHub: [CotNeo/ops](https://github.com/CotNeo/ops)
- Website: [cotneo.com](https://cotneo.com) 
