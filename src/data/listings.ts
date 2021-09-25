import __stayListing from "data/jsons/__stayListing.json"
import __experiencesListing from "data/jsons/__experiencesListing.json"
import { DEMO_EXPERIENCES_CATEGORIES, DEMO_STAY_CATEGORIES } from "data/taxonomies"
import { ExperiencesDataType, StayDataType } from "data/types"
import { DEMO_AUTHORS } from "data/authors"

const DEMO_STAY_LISTINGS = __stayListing.map((post, index): StayDataType => {
  const category = DEMO_STAY_CATEGORIES.filter(
    (taxonomy) => taxonomy.id === post.listingCategoryId
  )[0]

  return {
    ...post,
    saleOff: !index ? "-20% today" : post.saleOff,
    isAds: !index ? true : post.isAds,
    author: DEMO_AUTHORS.filter((user) => user.id === post.authorId)[0],
    listingCategory: category,
    house: ""
  }
})

const DEMO_EXPERIENCES_LISTINGS = __experiencesListing.map(
  (post, index): ExperiencesDataType => {
    const category = DEMO_EXPERIENCES_CATEGORIES.filter(
      (taxonomy) => taxonomy.id === post.listingCategoryId
    )[0]

    return {
      ...post,
      saleOff: !index ? "-20% today" : post.saleOff,
      isAds: !index ? true : post.isAds,
      author: DEMO_AUTHORS.filter((user) => user.id === post.authorId)[0],
      listingCategory: category
    }
  }
)

export { DEMO_STAY_LISTINGS, DEMO_EXPERIENCES_LISTINGS }
