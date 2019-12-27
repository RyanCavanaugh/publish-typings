import { createMockDT } from "./mocks";
import parseDefinitions from "./parse-definitions";
import { loggerWithErrors } from "./util/logging";
import { testo } from "./util/test";

testo({
    // async parseDefinitions() {
    //     const log = loggerWithErrors()[0]
    //     const dt = await getDefinitelyTyped(Options.defaults, log);
    //     const defs = await parseDefinitions(dt, undefined, log)
    //     expect(defs.allNotNeeded().length).toBeGreaterThan(0)
    //     expect(defs.allTypings().length).toBeGreaterThan(5000)
    //     const j = defs.tryGetLatestVersion("jquery")
    //     expect(j).toBeDefined()
    //     expect(j!.fullNpmName).toContain("types")
    //     expect(j!.fullNpmName).toContain("jquery")
    //     expect(defs.allPackages().length).toEqual(defs.allTypings().length + defs.allNotNeeded().length)
    // },
    async mockParse() {
        // console.log("waiting");
        // await new Promise(resolve => setTimeout(resolve, 5000));
        const log = loggerWithErrors()[0];
        const defs = await parseDefinitions(createMockDT().fs, undefined, log);
        expect(defs.allNotNeeded().length).toBe(1);
        expect(defs.allTypings().length).toBe(3);
        const j = defs.tryGetLatestVersion("jquery");
        expect(j).toBeDefined();
        expect(j!.fullNpmName).toContain("types");
        expect(j!.fullNpmName).toContain("jquery");
        expect(defs.allPackages().length).toEqual(defs.allTypings().length + defs.allNotNeeded().length);
    },
});
