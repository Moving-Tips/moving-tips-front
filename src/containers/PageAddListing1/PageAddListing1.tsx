import { LocationMarkerIcon } from "@heroicons/react/solid"
import LocationMarker from "components/AnyReactComponent/LocationMarker"
import GoogleMapReact from "google-map-react"
import { FC } from "react"
import ButtonSecondary from "shared/Button/ButtonSecondary"
import Input from "shared/Input/Input"
import Select from "shared/Select/Select"
import CommonLayout from "./CommonLayout"
import FormItem from "./FormItem"

export interface PageAddListing1Props {}

const PageAddListing1: FC<PageAddListing1Props> = () => {
  return (
    <CommonLayout
      index="01"
      backtHref="/add-listing-1"
      nextHref="/add-listing-2"
    >
      <>
        <h2 className="text-2xl font-semibold">Informe sua localidade</h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700" />
        {/* FORM */}
        <div className="space-y-8">
          <ButtonSecondary>
            <LocationMarkerIcon className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
            <span className="ml-3">Use sua localização atual</span>
          </ButtonSecondary>
          {/* ITEM */}
          <FormItem label="CEP">
            <Input />
          </FormItem>
          <FormItem label="Endereço">
            <Input placeholder="..." />
          </FormItem>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-5">
            <FormItem label="Cidade">
              <Input />
            </FormItem>
            <FormItem label="Estado">
              <Input />
            </FormItem>
          </div>
          <FormItem label="País">
            <Select>
              <option value="Angola">Angola</option>
              <option value="Arábia Saudita">Arábia Saudita</option>
              <option value="Argélia">Argélia</option>
              <option value="Alemanha">Alemanha</option>
              <option value="Argentina">Argentina</option>
              <option value="Austrália">Austrália</option>
              <option value="Brasil" selected>Brasil</option>
              <option value="...">...</option>
            </Select>
          </FormItem>
          <div>
            <div className="mt-4">
              <div className="aspect-w-5 aspect-h-5 sm:aspect-h-3">
                <div className="rounded-xl overflow-hidden">
                  <GoogleMapReact
                    bootstrapURLKeys={{
                      key: "AIzaSyDxJaU8bLdx7sSJ8fcRdhYS1pLk8Jdvnx0"
                    }}
                    defaultZoom={15}
                    yesIWantToUseGoogleMapApiInternals
                    defaultCenter={{
                      lat: -23.59498942427704,
                      lng: -46.68712751756319
                    }}
                  >
                    <LocationMarker lat={-23.59498942427704} lng={-46.68712751756319} />
                  </GoogleMapReact>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </CommonLayout>
  )
}

export default PageAddListing1
