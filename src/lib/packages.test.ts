import { createMockDT } from "../mocks";

import { getTypingInfo } from "./definition-parser";
import { TypingsVersions } from "./packages";

describe(TypingsVersions, () => {
    let versions: TypingsVersions;

    beforeAll(() => {
        const dt = createMockDT();
        dt.addOldVersionOfPackage("jquery", "1");
        dt.addOldVersionOfPackage("jquery", "2");
        dt.addOldVersionOfPackage("jquery", "2.5");
        versions = new TypingsVersions(getTypingInfo("jquery", dt.pkgFS("jquery")));
    });

    it("sorts the data from latest to oldest version", () => {
        expect(Array.from(versions.getAll()).map(v => v.major)).toEqual([3, 2, 2, 1]);
    });

    it("returns the latest version", () => {
        expect(versions.getLatest().major).toEqual(3);
    });

    it("finds the latest version when any version is wanted", () => {
        expect(versions.get("*").major).toEqual(3);
    });

    it("finds the latest minor version for the given major version", () => {
        expect(versions.get(2).major).toEqual(2);
        expect(versions.get(2).minor).toEqual(5);
    });
});
