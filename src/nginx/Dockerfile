# Nginx için Dockerfile
# Bu dosya, Nginx sunucusunu içeren bir Docker imajı oluşturur
# Ortam değişkenlerini destekler ve sağlık kontrolleri içerir

# Temel imaj olarak Alpine tabanlı Nginx kullanıyoruz
# Alpine, minimal boyutlu bir Linux dağıtımıdır
FROM nginx:${NGINX_VERSION}

# Çalışma dizinini belirle
WORKDIR /usr/share/nginx/html

# Nginx konfigürasyon dosyasını kopyala
# Bu dosya, sunucunun davranışını yapılandırır
COPY nginx.conf /etc/nginx/nginx.conf

# Statik dosyaları kopyala
# Bu dosyalar, web uygulamasının içeriğini oluşturur
COPY ../app/* /usr/share/nginx/html/

# Sağlık kontrolü için curl yükle
RUN apk add --no-cache curl

# Port tanımla
EXPOSE ${NGINX_PORT}

# Sağlık kontrolü
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:${NGINX_PORT}/health || exit 1

# Nginx'i arka planda çalıştır
# -g parametresi, global direktifleri belirtir
# daemon off, Nginx'in arka planda çalışmasını sağlar
CMD ["nginx", "-g", "daemon off;"] 