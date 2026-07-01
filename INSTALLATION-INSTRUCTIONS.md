# 🚀 BARBIER YANISO - COMPLETE PROJECT SETUP GUIDE

## 📁 YOUR COMPLETE PROJECT FOLDER STRUCTURE

This guide shows you **exactly** where to place each file downloaded from this chat.

---

## 📦 STEP 1: CREATE THE PROJECT FOLDER STRUCTURE

```
barbier-yaniso/
├── pages/                          # Next.js pages directory
│   ├── _app.jsx                    # App wrapper (from: pages-_app.jsx)
│   ├── index.jsx                   # Homepage (from: pages-index.jsx)
│   └── api/                        # API routes directory
│       ├── create-checkout-session.js     # (from: api-create-checkout-session.js)
│       ├── create-appointment.js          # (from: api-create-appointment.js)
│       └── webhooks/
│           └── stripe.js                 # (from: api-webhook-stripe.js)
│
├── components/                     # React components
│   ├── App.jsx                     # (from: App.jsx)
│   ├── Header.jsx                  # (from: Header.jsx)
│   ├── Hero.jsx                    # (from: Hero.jsx)
│   ├── About.jsx                   # (from: About.jsx)
│   ├── Services.jsx                # (from: Services.jsx)
│   ├── Locations.jsx               # (from: Locations.jsx)
│   ├── Reviews.jsx                 # (from: Reviews.jsx)
│   ├── BookingModal.jsx            # (from: BookingModal.jsx)
│   ├── BookingStep1.jsx            # (from: BookingStep1.jsx)
│   ├── BookingStep2.jsx            # (from: BookingStep2.jsx)
│   └── ConfirmationPage.jsx        # (from: ConfirmationPage.jsx)
│
├── styles/                         # CSS files
│   └── globals.css                 # (from: styles-globals.css)
│
├── public/                         # Static assets (create empty folder)
│   └── favicon.ico                 # (optional - add your logo)
│
├── .env.local                      # Environment variables (CREATE - don't upload)
├── .env.local.example              # (from: .env.local.example)
├── .gitignore                      # (from: implementation-snippets.js)
├── package.json                    # (from: package.json)
├── next.config.js                  # (from: next.config.js)
├── tailwind.config.js              # (from: tailwind.config.js)
├── postcss.config.js               # (create - see below)
├── tsconfig.json or jsconfig.json  # (Next.js will create automatically)
│
└── Documentation files (optional but helpful)
    ├── README.md                   # (from: README.md)
    ├── SETUP_GUIDE.md              # (from: SETUP_GUIDE.md)
    └── FILE-MANIFEST.md            # (from: FILE-MANIFEST.md)
```

---

## 🎯 STEP 2: DOWNLOAD ALL FILES FROM THE OUTPUTS FOLDER

All these files have been created in `/mnt/user-data/outputs/`:

**Core Component Files:**
- ✅ App.jsx
- ✅ Header.jsx
- ✅ Hero.jsx
- ✅ About.jsx
- ✅ Services.jsx
- ✅ Locations.jsx
- ✅ Reviews.jsx
- ✅ BookingModal.jsx
- ✅ BookingStep1.jsx
- ✅ BookingStep2.jsx
- ✅ ConfirmationPage.jsx

**API Route Files:**
- ✅ api-create-checkout-session.js
- ✅ api-create-appointment.js
- ✅ api-webhook-stripe.js

**Configuration Files:**
- ✅ pages-_app.jsx
- ✅ pages-index.jsx
- ✅ styles-globals.css
- ✅ package.json
- ✅ next.config.js
- ✅ tailwind.config.js
- ✅ .env.local.example

**Documentation:**
- ✅ README.md
- ✅ SETUP_GUIDE.md
- ✅ FILE-MANIFEST.md

---

## ⚙️ STEP 3: CREATE YOUR LOCAL PROJECT

### On Your Mac, run these commands:

```bash
# 1. Create new Next.js project
npx create-next-app@latest barbier-yaniso \
  --typescript=false \
  --tailwind=yes \
  --eslint=yes \
  --use-npm

# 2. Navigate to project
cd barbier-yaniso

# 3. Install additional dependencies
npm install stripe @supabase/supabase-js lucide-react micro
```

---

## 📋 STEP 4: PLACE FILES IN CORRECT LOCATIONS

### Download from outputs folder and place as follows:

#### **A) Pages (from pages-_app.jsx and pages-index.jsx)**

**File 1: pages/_app.jsx**
```
Download: pages-_app.jsx
Place at: barbier-yaniso/pages/_app.jsx
```

**File 2: pages/index.jsx**
```
Download: pages-index.jsx
Place at: barbier-yaniso/pages/index.jsx
```

#### **B) API Routes**

**File 1: pages/api/create-checkout-session.js**
```
Download: api-create-checkout-session.js
Place at: barbier-yaniso/pages/api/create-checkout-session.js
```

**File 2: pages/api/create-appointment.js**
```
Download: api-create-appointment.js
Place at: barbier-yaniso/pages/api/create-appointment.js
```

**File 3: pages/api/webhooks/stripe.js**
```
First create folder: pages/api/webhooks/
Download: api-webhook-stripe.js
Place at: barbier-yaniso/pages/api/webhooks/stripe.js
```

#### **C) Components (all 11 files)**

Create folder: `barbier-yaniso/components/`

Then download these files and place them in the components folder:
```
1. App.jsx → components/App.jsx
2. Header.jsx → components/Header.jsx
3. Hero.jsx → components/Hero.jsx
4. About.jsx → components/About.jsx
5. Services.jsx → components/Services.jsx
6. Locations.jsx → components/Locations.jsx
7. Reviews.jsx → components/Reviews.jsx
8. BookingModal.jsx → components/BookingModal.jsx
9. BookingStep1.jsx → components/BookingStep1.jsx
10. BookingStep2.jsx → components/BookingStep2.jsx
11. ConfirmationPage.jsx → components/ConfirmationPage.jsx
```

#### **D) Styles**

Create folder: `barbier-yaniso/styles/`

Download: `styles-globals.css`
Place at: `barbier-yaniso/styles/globals.css`

#### **E) Configuration Files (replace existing if present)**

```
Download: package.json
Place at: barbier-yaniso/package.json

Download: next.config.js
Place at: barbier-yaniso/next.config.js

Download: tailwind.config.js
Place at: barbier-yaniso/tailwind.config.js

Download: .env.local.example
Place at: barbier-yaniso/.env.local.example
```

#### **F) Create postcss.config.js (required for Tailwind)**

Create new file: `barbier-yaniso/postcss.config.js`

Paste this content:
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

---

## 🔧 STEP 5: CONFIGURE ENVIRONMENT VARIABLES

```bash
# Copy example to local
cp .env.local.example .env.local

# Edit .env.local with your actual values
nano .env.local
```

Add your actual keys:
```
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_ANON_KEY
SUPABASE_SERVICE_KEY=YOUR_SERVICE_KEY
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## 🗄️ STEP 6: CREATE DATABASE SCHEMA

1. Go to [Supabase Console](https://app.supabase.com)
2. Go to **SQL Editor**
3. Create new query
4. Download: `supabase-schema.sql`
5. Copy entire contents
6. Paste into Supabase SQL Editor
7. Click **Run**

---

## ▶️ STEP 7: START DEVELOPMENT SERVER

```bash
# Terminal 1: Start Next.js dev server
npm run dev

# Open: http://localhost:3000
```

In another terminal:
```bash
# Terminal 2: Forward Stripe webhooks
npm run stripe:listen
```

---

## ✅ VERIFY EVERYTHING WORKS

Visit `http://localhost:3000` and check:

- ✅ Homepage loads
- ✅ All sections visible
- ✅ Dark theme with gold accents applied
- ✅ "BOOK APPOINTMENT" button opens modal
- ✅ Form accepts input
- ✅ Payment options display correctly

---

## 📥 QUICK FILE DOWNLOAD CHECKLIST

**Components to Download (11 files):**
- [ ] App.jsx
- [ ] Header.jsx
- [ ] Hero.jsx
- [ ] About.jsx
- [ ] Services.jsx
- [ ] Locations.jsx
- [ ] Reviews.jsx
- [ ] BookingModal.jsx
- [ ] BookingStep1.jsx
- [ ] BookingStep2.jsx
- [ ] ConfirmationPage.jsx

**API Routes to Download (3 files):**
- [ ] api-create-checkout-session.js
- [ ] api-create-appointment.js
- [ ] api-webhook-stripe.js

**Pages to Download (2 files):**
- [ ] pages-_app.jsx
- [ ] pages-index.jsx

**Styles to Download (1 file):**
- [ ] styles-globals.css

**Config to Download (6 files):**
- [ ] package.json
- [ ] next.config.js
- [ ] tailwind.config.js
- [ ] .env.local.example
- [ ] implementation-snippets.js (for reference)

**Database (1 file):**
- [ ] supabase-schema.sql

**Documentation (3 files):**
- [ ] README.md
- [ ] SETUP_GUIDE.md
- [ ] FILE-MANIFEST.md

---

## 🎓 WHAT TO READ FIRST

1. **README.md** - Project overview
2. **SETUP_GUIDE.md** - Detailed setup steps
3. **FILE-MANIFEST.md** - All files explained

---

## 🚀 YOU'RE READY TO LAUNCH!

Once you've:
1. ✅ Downloaded all files
2. ✅ Placed them in correct folders
3. ✅ Configured .env.local
4. ✅ Created Supabase schema
5. ✅ Run `npm run dev`

Your **complete barber shop booking system is LIVE** at `http://localhost:3000`

---

## 💬 TROUBLESHOOTING

**Issue: "Cannot find module 'stripe'"**
```bash
npm install stripe
```

**Issue: "Tailwind CSS not working"**
```bash
# Reinstall
npm install -D tailwindcss postcss autoprefixer

# Create postcss.config.js (see above)
```

**Issue: "Port 3000 already in use"**
```bash
npm run dev -- -p 3001
```

**Issue: "Module not found: can't resolve '@/components'"**
- Make sure jsconfig.json or tsconfig.json exists
- Next.js creates it automatically on first run

---

## 📞 NEXT STEPS AFTER SETUP

1. Test the booking flow on localhost
2. Get Stripe test keys
3. Get Supabase credentials
4. Fill in .env.local
5. Deploy to Vercel
6. Switch to production keys
7. Configure Stripe webhooks for production

---

**Happy coding! Your Barbier Yaniso booking system is ready!** ✂️
