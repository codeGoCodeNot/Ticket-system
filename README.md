# scripts

-- "type": "tsc --noEmit"

# tailwind

-- pnpm add tailwind-animate

# Lucide react

-- file lucide-react.d.ts
-- declare module "lucide-react"

# dark mode

-- pnpm install next-themes

# prisma

for migration change prisma.config.ts file to this
datasource: {
url: env("DIRECT_URL"),
},

then run

-- npx prisma migrate dev --name init
-- npx prisma generate
