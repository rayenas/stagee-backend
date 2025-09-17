# Livraison Backend

## تشغيل المشروع

- ثبت dependencies:
  ```
  npm install
  ```

- شغل السيرفر (في التطوير):
  ```
  npm run dev
  ```

- تأكد MongoDB شغال محلياً على المنفذ 27017

---

## API Endpoints

- POST /api/auth/signup  
- POST /api/auth/login  
- GET /api/orders  (تأخذ التوكن في Authorization)  
- POST /api/orders/start/:orderId  
- POST /api/orders/location  
- POST /api/orders/finish/:orderId
