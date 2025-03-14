export function getOppositeColor(colorHex) {
   
    if (colorHex.startsWith("#")) {
      
        const hex = colorHex.slice(1); 
        const decimal = parseInt(hex, 16); 

        
        const oppositeDecimal = 0xFFFFFF - decimal;

        
        const oppositeHex = oppositeDecimal.toString(16).padStart(6, "0");

       
        return `#${oppositeHex}`;
    } else {
        throw new Error("El color no está en formato hexadecimal válido (#RRGGBB).");
    }
}
