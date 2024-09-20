
import { withNaming } from "@bem-react/classname";

export type { ClassNameFormatter } from "@bem-react/classname";

/**
 *Function from the @bem-react/classname library adapted to the project's css class notation convention.
 */
export const bemClassNames = withNaming({ n: "", e: "__", m: "--", v: "-" });