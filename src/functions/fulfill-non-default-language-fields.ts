import { PageContent } from "../types/types"

export default function fullfillNonDefaultLanguageFields(content: {
  [info: string]: { fr: string; en?: string }
}): PageContent {
  const output = { ...content }

  for (const property in output) {
    if (output[property]["en"] === undefined) output[property]["en"] = output[property]["fr"]
  }

  return output as PageContent
}
