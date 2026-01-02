////////
meu-projeto/
│
├── public/ ← ÚNICA pasta acessível pelo navegador
│ │
│ ├── index.html ← página inicial (futuramente index.php)
│ │
│ ├── pages/ ← outras páginas públicas
│ │ ├── login.html
│ │ └── cadastro.html
│ │
│ └── assets/
│ ├── css/
│ │ ├── reset.css
│ │ ├── variables.css
│ │ ├── global.css
│ │ └── pages/
│ │ ├── login.css
│ │ └── cadastro.css
│ │
│ ├── js/
│ │ ├── main.js
│ │ ├── utils/
│ │ │ └── helpers.js
│ │ ├── services/
│ │ │ └── api.js ← preparado para back-end
│ │ └── pages/
│ │ ├── login.js
│ │ └── cadastro.js
│ │
│ ├── images/
│ └── fonts/
│
├── app/ ← BACK-END (vazio por enquanto)
│ ├── Controllers/
│ ├── Models/
│ └── Views/
│
├── config/ ← configurações (futuro)
│ └── database.php
│
├── storage/ ← uploads, logs (fora do public)
│
├── .env ← variáveis de ambiente (futuro)
├── .gitignore
└── README.md
/////////
