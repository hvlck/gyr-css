require("esbuild")
    .build({
        entryPoints: ["./src/index.css"],
        bundle: true,
        outfile: "dist/index.css",
        minify: true,
        treeShaking: true,
        keepNames: true,
        // watch: true,
    })
    .catch(() => process.exit(1));
