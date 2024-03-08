FROM node:18-alpine AS base

ENV DATABASE_URL mysql://root:230300@172.17.0.1:3306/colegio
ENV SECRET mysecret

FROM base AS devDeps

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --development

FROM base AS deps

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --production


FROM deps AS build
WORKDIR /app
COPY --from=devDeps /app/node_modules ./node_modules

COPY . .

RUN npm run build

FROM base AS release
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/prisma ./prisma
COPY --from=build /app/package.json ./package.json

RUN npx prisma migrate deploy
RUN npx prisma generate

EXPOSE 3001

CMD ["npm", "start"]