import { FC, useState } from "react"
import { ArrowRightIcon } from "@heroicons/react/outline"
import LocationMarker from "components/AnyReactComponent/LocationMarker"
import CommentListing from "components/CommentListing/CommentListing"
import FiveStartIconForRate from "components/FiveStartIconForRate/FiveStartIconForRate"
import { DateRage } from "components/HeroSearchForm/StaySearchForm"
import StartRating from "components/StartRating/StartRating"
import GoogleMapReact from "google-map-react"
import useWindowSize from "hooks/useWindowResize"
import moment from "moment"
import { FocusedInputShape } from "react-dates"
import ButtonCircle from "shared/Button/ButtonCircle"
import ButtonSecondary from "shared/Button/ButtonSecondary"
import Input from "shared/Input/Input"
import NcImage from "shared/NcImage/NcImage"
import ModalPhotos from "containers/ListingDetailPage/ModalPhotos"
import ChartDemo from "images/chart/demo.png"

export interface ListingStayDetailPageProps {
  className?: string
  isPreviewMode?: boolean
}

const PHOTOS: string[] = [
  "https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  "https://images.pexels.com/photos/7163619/pexels-photo-7163619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/6527036/pexels-photo-6527036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/6969831/pexels-photo-6969831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/6438752/pexels-photo-6438752.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/261394/pexels-photo-261394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/2861361/pexels-photo-2861361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/2677398/pexels-photo-2677398.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
]

const ListingStayDetailPage: FC<ListingStayDetailPageProps> = ({
  className = "",
  isPreviewMode
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [openFocusIndex, setOpenFocusIndex] = useState(0)
  const [selectedDate, setSelectedDate] = useState<DateRage>({
    startDate: moment(),
    endDate: moment().add(4, "days")
  })

  const [focusedInputSectionCheckDate, setFocusedInputSectionCheckDate] =
        useState<FocusedInputShape>("startDate")
  const [isOpenModalAmenities, setIsOpenModalAmenities] = useState(false)

  const windowSize = useWindowSize()

  const getDaySize = () => {
    if (windowSize.width <= 375) {
      return 34
    }
    if (windowSize.width <= 500) {
      return undefined
    }
    if (windowSize.width <= 1280) {
      return 56
    }
    return 48
  }

  function closeModalAmenities () {
    setIsOpenModalAmenities(false)
  }

  function openModalAmenities () {
    setIsOpenModalAmenities(true)
  }

  const handleOpenModal = (index: number) => {
    setIsOpen(true)
    setOpenFocusIndex(index)
  }

  const handleCloseModal = () => setIsOpen(false)

  const renderInicial = () => {
    return (
      <div className="listingSection__wrap !space-y-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                    Parelheiros
        </h2>

        <div className="flex items-center space-x-4">
          <StartRating/>
          <span>??</span>
          <span>
            <i className="las la-map-marker-alt"/>
            <span className="ml-1"> S??o Paulo, SP</span>
          </span>
        </div>
      </div>
    )
  }

  const renderInfo = () => {
    return (
      <div className="listingSection__wrap">
        <h2 className="text-2xl font-semibold">Informa????es</h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"/>
        <div className="text-neutral-6000 dark:text-neutral-300">
          <span>
            Parelheiros ?? um distrito localizado na zona sul do munic??pio de S??o Paulo. ?? o segundo maior distrito do munic??pio em extens??o territorial, embora seja muito pouco povoado.
          </span>
        </div>
      </div>
    )
  }

  const renderSkills = () => {
    return (
      <div className="listingSection__wrap">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"/>
        <NcImage src={ChartDemo}/>
      </div>
    )
  }

  const renderReviews = () => {
    return (
      <div className="listingSection__wrap">
        <h2 className="text-2xl font-semibold">An??lises (23 an??lise)</h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"/>
        <div className="space-y-5">
          <FiveStartIconForRate iconClass="w-6 h-6" className="space-x-0.5"/>
          <div className="relative">
            <Input
              fontClass=""
              sizeClass="h-16 px-4 py-3"
              rounded="rounded-3xl"
              placeholder="Comente sobre o bairro ..."
            />
            <ButtonCircle
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
              size=" w-12 h-12 "
            >
              <ArrowRightIcon className="w-5 h-5"/>
            </ButtonCircle>
          </div>
        </div>
        <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
          <CommentListing className="py-8"/>
          <CommentListing className="py-8"/>
          <CommentListing className="py-8"/>
          <div className="pt-8">
            <ButtonSecondary>Veja mais 20 an??lises</ButtonSecondary>
          </div>
        </div>
      </div>
    )
  }

  const renderLocation = () => {
    return (
      <div className="listingSection__wrap">
        <div>
          <h2 className="text-2xl font-semibold">Localidade</h2>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            Parelheiros, S??o Paulo, SP, Brasil
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"/>

        <div className="aspect-w-5 aspect-h-5 sm:aspect-h-3">
          <div className="rounded-xl overflow-hidden">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyDxJaU8bLdx7sSJ8fcRdhYS1pLk8Jdvnx0"
              }}
              defaultZoom={15}
              yesIWantToUseGoogleMapApiInternals
              defaultCenter={{
                lat: -23.821178563018098,
                lng: -46.70273006356647
              }}
            >
              <LocationMarker lat={-23.821178563018098} lng={-46.70273006356647}/>
            </GoogleMapReact>
          </div>
        </div>
      </div>
    )
  }

  const renderThingsToKnow = () => {
    return (
      <div className="listingSection__wrap">
        <h2 className="text-2xl font-semibold">Coisas para saber</h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"/>

        <div>
          <h4 className="text-lg font-semibold">Curiosidades e belezas naturais</h4>
          <span className="block mt-3 text-neutral-500 dark:text-neutral-400">
            Parelheiros ?? a fronteira final. O distrito do extremo sul de S??o Paulo, que faz divisa com a Est??ncia de Itanha??m e fica a 37,1km do Centro Hist??rico da capital paulista, tem 202 mil habitantes e guarda in??meras curiosidades, muitas delas ainda por serem descobertas. Uma delas ?? o seu nome inusitado, que vem das corridas de cavalos ali ocorridas, as antigas parelhas.
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"/>
      </div>
    )
  }

  return (
    <div
      className={`nc-ListingStayDetailPage  ${className}`}
      data-nc-id="ListingStayDetailPage"
    >
      <>
        <header className="container 2xl:px-14 rounded-md sm:rounded-xl">
          <div className="relative grid grid-cols-3 sm:grid-cols-4 gap-1 sm:gap-2">
            <div
              className="col-span-2 row-span-3 sm:row-span-2 relative rounded-md sm:rounded-xl overflow-hidden cursor-pointer"
              onClick={() => handleOpenModal(0)}
            >
              <NcImage
                containerClassName="absolute inset-0"
                className="object-cover w-full h-full rounded-md sm:rounded-xl"
                src={PHOTOS[0]}
                prevImageHorizontal
              />
              <div
                className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"/>
            </div>
            {PHOTOS.filter((_, i) => i >= 1 && i < 5).map((item, index) => (
              <div
                key={index}
                className={`relative rounded-md sm:rounded-xl overflow-hidden ${
                                    index >= 3 ? "hidden sm:block" : ""
                                }`}
              >
                <NcImage
                  containerClassName="aspect-w-4 aspect-h-3 sm:aspect-w-6 sm:aspect-h-5"
                  className="object-cover w-full h-full rounded-md sm:rounded-xl "
                  src={item || ""}
                  prevImageHorizontal
                />

                <div
                  className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                  onClick={() => handleOpenModal(index + 1)}
                />
              </div>
            ))}

            <div
              className="absolute hidden md:flex md:items-center md:justify-center left-3 bottom-3 px-4 py-2 rounded-xl bg-neutral-100 text-neutral-500 cursor-pointer hover:bg-neutral-200 z-10"
              onClick={() => handleOpenModal(0)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
              <span className="ml-2 text-neutral-800 text-sm font-medium">
                Mostrar todas as fotos
              </span>
            </div>
          </div>
        </header>
        <ModalPhotos
          imgs={PHOTOS}
          isOpen={isOpen}
          onClose={handleCloseModal}
          initFocus={openFocusIndex}
        />
      </>

      <main className="container mt-11 flex ">
        <div className="w-full lg:w-3/5 xl:w-2/3 space-y-8 lg:space-y-10 lg:pr-10">
          {renderInicial()}
          {renderInfo()}
          {renderSkills()}
          {renderReviews()}
          {renderLocation()}
          {renderThingsToKnow()}
        </div>
      </main>
    </div>
  )
}

export default ListingStayDetailPage
