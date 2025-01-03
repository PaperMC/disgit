FROM oven/bun
WORKDIR /usr/src/app
USER bun
EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "run", "bun.ts" ]
COPY src .
