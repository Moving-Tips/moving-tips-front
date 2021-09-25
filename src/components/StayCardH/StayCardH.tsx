import React, { FC } from "react"
import GallerySlider from "components/GallerySlider/GallerySlider"
import { DEMO_STAY_LISTINGS } from "data/listings"
import { StayDataType } from "data/types"
import StartRating from "components/StartRating/StartRating"
import { Link } from "react-router-dom"
import BtnLikeIcon from "components/BtnLikeIcon/BtnLikeIcon"
import SaleOffBadge from "components/SaleOffBadge/SaleOffBadge"
import Badge from "shared/Badge/Badge"

export interface StayCardHProps {
  className?: string
  data?: StayDataType
}

const DEMO_DATA = DEMO_STAY_LISTINGS[0]

const StayCardH: FC<StayCardHProps> = ({
  className = "",
  data = DEMO_DATA
}) => {
  const {
    galleryImgs,
    listingCategory,
    address,
    title,
    href,
    like,
    saleOff,
    isAds,
    price,
    reviewStart,
    reviewCount
  } = data

  const renderSliderGallery = () => {
    return (
      <div className="relative w-full sm:w-72 ">
        <GallerySlider
          ratioClass="aspect-w-6 aspect-h-5"
          galleryImgs={galleryImgs}
        />
        <BtnLikeIcon isLiked={like} className="absolute right-3 top-3" />
      </div>
    )
  }

  const renderTienIch = () => {
    return (
      <div className="hidden sm:grid grid-cols-3 gap-2">
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <i className="las la-user text-lg"></i>
            <span className="text-sm text-neutral-500 dark:text-neutral-400">
              6 guests
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <i className="las la-bed text-lg"></i>
            <span className="text-sm text-neutral-500 dark:text-neutral-400">
              6 casas
            </span>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <i className="las la-bath text-lg"></i>
            <span className="text-sm text-neutral-500 dark:text-neutral-400">
              3 baths
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <i className="las la-smoking-ban text-lg"></i>
            <span className="text-sm text-neutral-500 dark:text-neutral-400">
              No smoking
            </span>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <i className="las la-door-open text-lg"></i>
            <span className="text-sm text-neutral-500 dark:text-neutral-400">
              6 bedrooms
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <i className="las la-wifi text-lg"></i>
            <span className="text-sm text-neutral-500 dark:text-neutral-400">
              Wifi
            </span>
          </div>
        </div>
      </div>
    )
  }

  const renderContent = () => {
    return (
      <>
        <div className="flex-grow p-3 sm:p-5 flex flex-col">
          <div className="space-y-2 mb-8">
            <div className="flex items-center space-x-2">
              <h2 className="text-lg font-medium capitalize mx-auto">
                <span className="line-clamp-1">{title}</span>
              </h2>
            </div>
          </div>
          {renderTienIch()}
          <div className="flex justify-between items-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="nc-icon-field"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <div className="text-sm text-neutral-500 dark:text-neutral-400">
              <span>
                {listingCategory.name}
              </span>
            </div>
            <StartRating reviewCount={reviewCount} point={reviewStart} />
          </div>
        </div>
        <div className="sm:block border-b border-neutral-100 dark:border-neutral-800 my-4"></div>
      </>
    )
  }

  return (
    <div
      className={`nc-StayCardH group relative bg-white 0 overflow-hidden hover:shadow-xl transition-shadow ${className}`}
      data-nc-id="StayCardH"
    >
      <Link to={href} className="flex flex-col sm:flex-row sm:items-center">
        {renderSliderGallery()}
        {renderContent()}
      </Link>
    </div>
  )
}

export default StayCardH
