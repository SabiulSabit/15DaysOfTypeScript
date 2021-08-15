
//interface for loaction
export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string;
}


export class CustomeMap {
    //map property
    private googleMap: google.maps.Map;

    //create google map
    constructor(divID: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divID), {
            zoom: 3,
            center: {
                lat: 0,
                lng: 0
            }
        })

    }

    // add marker to map
    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        })

        //show a popup
        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            })
            infoWindow.open(this.googleMap, marker);
        })
    }

}