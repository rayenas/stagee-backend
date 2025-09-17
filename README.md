# 🚀 Livraison Backend

**Livraison Backend** هو سيرفر Node.js مسؤول على إدارة الطلبات وعمليات التوصيل في مشروع Livraison. يستخدم MongoDB لتخزين البيانات ويوفر RESTful API للتعامل مع الطلبات والمستخدمين.

---

## 🛠️ Installation & Setup

1. Clone المشروع:
```bash
git clone https://github.com/rayenas/stagee-backend.git
cd stagee-backend
ثبّت الـdependencies:

bash
Copy code
npm install
تأكد إن MongoDB شغال محلياً على المنفذ 27017 أو عدّل .env إذا لزم.

شغّل السيرفر في وضع التطوير:

bash
Copy code
npm run dev
📌 API Endpoints
Method	Route	Description	Auth
POST	/api/auth/signup	تسجيل مستخدم جديد	❌
POST	/api/auth/login	تسجيل الدخول	❌
GET	/api/orders	جلب كل الطلبات	✅ Bearer Token
POST	/api/orders/start/:orderId	بدء طلب	✅ Bearer Token
POST	/api/orders/location	تحديث موقع التوصيل	✅ Bearer Token
POST	/api/orders/finish/:orderId	إنهاء طلب	✅ Bearer Token

ملاحظة: Authorization يتم عبر Header Bearer <token>
## API Endpoints

- POST /api/auth/signup  
- POST /api/auth/login  
- GET /api/orders  (تأخذ التوكن في Authorization)  
- POST /api/orders/start/:orderId  
- POST /api/orders/location  
- POST /api/orders/finish/:orderId
