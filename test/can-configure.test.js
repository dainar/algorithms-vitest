import { describe, expect, it } from "vitest"
import { canConfigure } from "../src/can-configure"



describe("canConfigure", () => {
    it("should throw if first parameter is mising", () => {
        expect(()=>canConfigure()).toThrow() 
    })


     it("should throw if first parameter is not a string", () => {
        expect(()=>canConfigure(2)).toThrow() 
     })
    
    it("should throw if second parameter is not a string", () => {
        expect(()=>canConfigure("a")).toThrow() 
    })

     it("should retrun a boolean", () => {
        expect(canConfigure("a", "b")).toBeTypeOf("boolean") 
     })
    
    it("should retrun false if string provided are of different length", () => {
        expect(canConfigure("aab", "ab")).toBe(false) 
    })

     it("should retrun false if string provided have different number of unique letters", () => {
        expect(canConfigure("abc", "ddd")).toBe(false) 
    })

     it("should retrun false if strings have different order of transformation", () => {
        expect(canConfigure("XBOX", "XXBO")).toBe(false) 
    })
        

})
