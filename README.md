# Neia Paz Brazil Connect

Site institucional da NeiaPaz (eventos, design e conexões Brasil-Italia), desenvolvido com React + Vite.

## Stack
- React 18
- TypeScript
- Vite 5
- Tailwind CSS
- Supabase JS

## Requisitos
- Node.js 20+ (recomendado 22)
- npm

## Instalação e desenvolvimento local
1. Instale as dependências:
   - `npm ci`
2. Configure o arquivo `.env.local`.
3. Rode o projeto:
   - `npm run dev`

## Variáveis de ambiente
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `VITE_WHATSAPP_NUMBER` (apenas dígitos, ex: `5511999999999`)
- `VITE_CONTACT_EMAIL`
- `VITE_CONTACT_PHONE`

## Build local
- `npm run build`
- `npm run preview`

## Deploy (GitHub Pages + GitHub Actions)
O deploy acontece automaticamente ao fazer push na branch `main` via workflow `Deploy to GitHub Pages`.

### Fluxo recomendado no dia a dia (Cursor)
1. Fazer alterações no código.
2. Validar localmente:
   - `npm run preflight`
3. Commitar:
   - `git add .`
   - `git commit -m "sua mensagem"`
4. Publicar:
   - `npm run release`

## Scripts principais
- `npm run dev`: ambiente de desenvolvimento
- `npm run lint`: valida lint
- `npm run test`: executa testes
- `npm run build`: gera build de produção
- `npm run preflight`: build de produção (fluxo rapido de deploy)
- `npm run preflight:strict`: lint + test + build (validacao completa)
- `npm run release`: preflight + push para `origin/main`

## Observações importantes
- O comando `npm run release` pressupõe que o commit já foi feito.
- O comando `npm run release` usa validacao rapida de build para nao bloquear por erros antigos de lint no projeto.
- Para validacao completa antes de publicar, use `npm run preflight:strict`.
- Se o push for rejeitado (ex.: branch desatualizada), sincronize com o remoto e tente novamente.
- `.env.local` nao deve ser versionado com credenciais sensiveis.
