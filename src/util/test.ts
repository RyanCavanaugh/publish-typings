import { License, PackageId, TypingsVersionsRaw } from "../lib/packages";
export function testo(o: { [s: string]: () => void }) {
    for (const k in o) {
        test(k, o[k], 100_000);
    }
}

export function createTypingsVersionRaw(
    name: string, dependencies: PackageId[], testDependencies: string[],
): TypingsVersionsRaw {
    return {
        1: {
            libraryName: name,
            typingsPackageName: name,
            dependencies,
            testDependencies,
            files: ["index.d.ts"],
            libraryMajorVersion: 1,
            libraryMinorVersion: 0,
            pathMappings: [],
            contributors: [{ name: "Bender", url: "futurama.com", githubUsername: "bender" }],
            minTsVersion: "2.3",
            typesVersions: [],
            license: License.MIT,
            packageJsonDependencies: [],
            contentHash: "11111111111111",
            projectName: "zombo.com",
            globals: [],
            declaredModules: [],
        },
    };
}
