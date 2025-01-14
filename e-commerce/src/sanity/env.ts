export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-12-27'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
"production"
)

export const token = assertValue(
  process.env.NEXT_PUBLIC_SANITY_TOKEN,
  'hidden'
)


export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'hiden'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
