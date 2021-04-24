import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react';
import './map.css';
import office from '../images/office.jpg'
import home1 from '../images/home1.jpg';
import home2 from '../images/home2.jpg';
import home3 from '../images/home3.jpg';
import home4 from '../images/home4.jpg';
import home5 from '../images/home5.jpg';
import home6 from '../images/home6.jpg';
import home7 from '../images/home7.jpg';
import home8 from '../images/home8.jpg';
import home9 from '../images/home9.jpg';
import home10 from '../images/home10.jpg';
import home11 from '../images/home11.jpg';
import home12 from '../images/home12.jpg';
import home13 from '../images/home13.jpg';
import home14 from '../images/home14.jpg';
import home15 from '../images/home15.jpg';
import home16 from '../images/home16.jpg';
import home17 from '../images/home17.jpg';
import home18 from '../images/home18.jpg';
import home19 from '../images/home19.jpg';

//note: code formatted for ES6 here
export class MapContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            zoom: 19,
            address: '',
            mapTypeControl: true,
            // Set to default to satellite but IDK
            mapTypeId: 'satellite',
            disableDefaultUI: true,
            activeMarker: {},
            selectedPlace: {},
            mapCenter: {
                lat: 29.118300,
                lng: -82.100938
            },
            isOpen: false,
            mapMarker: null,
            showingInfoWindow: false,
            // showingInfoWindow: false
        }
    };

    onMarkerClick = (props, marker) => {
        this.setState({
            showingInfoWindow: true,
            selectedPlace: props,
            activeMarker: marker
        });
    };

    onInfoWindowClose = () =>
        this.setState({
            showingInfoWindow: false,
            activeMarker: null,
        });

    onMapCLicked = () => {
        if (this.set.showingInfoWindow)
            this.setState({
                activeMarker: null,
                showingInfoWindow: false
            });
    };

    render() {
        return (
            <div >
                {/* Trying to set default to satellite view*/}
                <Map zoom={this.state.zoom} className="googleMap" google={this.props.google}
                    initialCenter={{
                        lat: this.state.mapCenter.lat,
                        lng: this.state.mapCenter.lng,
                    }}
                    center={{
                        lat: this.state.mapCenter.lat,
                        lng: this.state.mapCenter.lng,
                    }}
                    mapType={this.state.mapTypeId}>

                    {/* Office */}
                    <Marker
                        name="Office"
                        bed="Contact Information:"
                        bath="(352)-390-7495"
                        rent="tsaikevin94@yahoo.com"
                        homePicture={office}
                        position={{
                            lat: 29.118695412565625,
                            lng: -82.10115706843973
                        }}
                        clickable
                        onClick={this.onMarkerClick} />

                    {/* House A */}
                    <Marker
                        name="House A"
                        bed="3 Bedroom"
                        bath="2 Bathroom"
                        rent="$800/Month"
                        avail="Available"
                        homePicture={home1}
                        position={{
                            lat: 29.118902807729818,
                            lng: -82.10081659956916
                        }}
                        clickable
                        onClick={this.onMarkerClick} />

                    {/* House B */}
                    <Marker
                        name="House B"
                        homePicture={home2}
                        bed="2 Bedroom"
                        bath="1.5 Bathroom"
                        rent="$650/Month"
                        avail="Unavailable"
                        position={{
                            lat: 29.118687282511313,
                            lng: -82.10072498277634
                        }}
                        clickable
                        onClick={this.onMarkerClick} />
                    {/* House C */}

                    <Marker
                        name="House C"
                        homePicture={home3}
                        bed="2 Bedroom"
                        bath="1 Bathroom"
                        rent="$600/Month"
                        avail="Available"
                        position={{
                            lat: 29.118581837812673,
                            lng: -82.10065792760207
                        }}
                        clickable
                        onClick={this.onMarkerClick} />

                    {/* House D */}
                    <Marker
                        name="House D"
                        homePicture={home4}
                        bed="2 Bedroom"
                        bath="1.5 Bathroom"
                        rent="$650/Month"
                        avail="Under Maintenance"
                        position={{
                            lat: 29.118471701944134,
                            lng: -82.10061868804938
                        }}
                        clickable
                        onClick={this.onMarkerClick} />
                    {/* House E */}
                    <Marker
                        name="House E"
                        homePicture={home5}
                        bed="2 Bedroom"
                        bath="1 Bathroom"
                        rent="$600/Month"
                        avail="Available"
                        position={{
                            lat: 29.11836567110728,
                            lng: -82.10051005862071
                        }}
                        clickable
                        onClick={this.onMarkerClick} />

                    {/* House 1 */}
                    <Marker
                        name="House 1"
                        homePicture={home6}
                        bed="2 Bedroom"
                        bath="1 Bathroom"
                        rent="$675/Month"
                        avail="Available"
                        position={{
                            lat: 29.118143650781686,
                            lng: -82.10058717221882
                        }}
                        clickable
                        onClick={this.onMarkerClick} />
                    {/* House 2 */}
                    <Marker
                        name="House 2"
                        homePicture={home7}
                        bed="2 Bedroom"
                        bath="1 Bathroom"
                        rent="$650/Month"
                        avail="Unavailable"
                        position={{
                            lat: 29.118112017273248,
                            lng: -82.1007018364859
                        }}
                        clickable
                        onClick={this.onMarkerClick} />
                    {/* House 5 */}
                    <Marker
                        name="House 5"
                        homePicture={home8}
                        bed="2 Bedroom"
                        bath="1 Bathroom"
                        rent="$600/Month"
                        avail="Available"
                        position={{
                            lat: 29.11771027045072,
                            lng: -82.10086205540007
                        }}
                        clickable
                        onClick={this.onMarkerClick} />
                    {/* House 6 */}
                    <Marker
                        name="House 6"
                        homePicture={home9}
                        bed="2 Bedroom"
                        bath="1 Bathroom"
                        rent="$625/Month"
                        avail="Unavailable"
                        position={{
                            lat: 29.117599552441213,
                            lng: -82.10084260939917
                        }}
                        clickable
                        onClick={this.onMarkerClick} />
                    {/* House 7 */}
                    <Marker
                        name="House 7"
                        homePicture={home10}
                        bed="2 Bedroom"
                        bath="1 Bathroom"
                        rent="$675/Month"
                        avail="Available"
                        position={{
                            lat: 29.117515573093534,
                            lng: -82.10086034870861
                        }}
                        clickable
                        onClick={this.onMarkerClick} />
                    {/* House 8 */}
                    <Marker
                        name="House 8"
                        homePicture={home11}
                        bed="3 Bedroom"
                        bath="2 Bathroom"
                        rent="$750/Month"
                        avail="Available"
                        position={{
                            lat: 29.11740389210246,
                            lng: -82.10094788602672
                        }}
                        clickable
                        onClick={this.onMarkerClick} />
                    {/* House 10 */}
                    <Marker
                        name="House 10"
                        homePicture={home12}
                        bed="2 Bedroom"
                        bath="1 Bathroom"
                        rent="$650/Month"
                        avail="Under Maintenance"
                        position={{
                            lat: 29.117391004075245,
                            lng: -82.1012905381193
                        }}
                        clickable
                        onClick={this.onMarkerClick} />
                    {/* House 11 */}
                    <Marker
                        name="House 11"
                        homePicture={home13}
                        bed="2 Bedroom"
                        bath="1 Bathroom"
                        rent="$625/Month"
                        avail="Under Maintenance"
                        position={{
                            lat: 29.117516953226236,
                            lng: -82.10130327865525
                        }}
                        clickable
                        onClick={this.onMarkerClick} />
                    {/* House 12 */}
                    <Marker
                        name="House 12"
                        homePicture={home14}
                        bed="2 Bedroom"
                        bath="1 Bathroom"
                        rent="$600/Month"
                        avail="Available"
                        position={{
                            lat: 29.11761888416635,
                            lng: -82.10130059649691
                        }}
                        clickable
                        onClick={this.onMarkerClick} />
                    {/* House 13 */}
                    <Marker
                        name="House 13"
                        homePicture={home15}
                        bed="2 Bedroom"
                        bath="1 Bathroom"
                        rent="$600/Month"
                        avail="Under Maintenance"
                        position={{
                            lat: 29.11772198673081,
                            lng: -82.10130126710315
                        }}
                        clickable
                        onClick={this.onMarkerClick} />
                    {/* House 14 */}
                    <Marker
                        name="House 14"
                        homePicture={home16}
                        bed="3 Bedroom"
                        bath="1.5 Bathroom"
                        rent="$750/Month"
                        avail="Unavailable"
                        position={{
                            lat: 29.11783387609505,
                            lng: -82.10129187931746
                        }}
                        clickable
                        onClick={this.onMarkerClick} />
                    {/* House 15 */}
                    <Marker
                        name="House 15"
                        homePicture={home17}
                        bed="2 Bedroom"
                        bath="1 Bathroom"
                        rent="$650/Month"
                        avail="Available"
                        position={{
                            lat: 29.117965097111952,
                            lng: -82.10130059648132
                        }}
                        clickable
                        onClick={this.onMarkerClick} />
                    {/* House 16 */}
                    <Marker
                        name="House 16"
                        homePicture={home18}
                        bed="2 Bedroom"
                        bath="1 Bathroom"
                        rent="$500/Month"
                        avail="Under Maintenance"
                        position={{
                            lat: 29.118075229074833,
                            lng: -82.10130327871471
                        }}
                        clickable
                        onClick={this.onMarkerClick} />
                    {/* House 17 */}
                    <Marker
                        name="House 17"
                        homePicture={home19}
                        bed="2 Bedroom"
                        bath="2 Bathroom"
                        rent="$700/Month"
                        avail="Available"
                        position={{
                            lat: 29.118188875919436,
                            lng: -82.1012932204196
                        }}
                        clickable
                        onClick={this.onMarkerClick} />
                    <InfoWindow
                        marker={this.state.activeMarker}
                        onClose={this.onInfoWindowClose}
                        visible={this.state.showingInfoWindow}
                    >
                        <div className="infowindow">
                            <h3 className="window-header">{this.state.selectedPlace.name}</h3>
                            <div className="right-window">
                                <img className="window-house" src={this.state.selectedPlace.homePicture} alt="house test" ></img>
                            </div>
                            <div className="left-window">
                                <p className="window-text">
                                    {this.state.selectedPlace.bed} <br />
                                    {this.state.selectedPlace.bath} <br />
                                    {this.state.selectedPlace.rent}</p>
                                <p className="window-avail">{this.state.selectedPlace.avail}</p>
                            </div>
                        </div>
                    </InfoWindow>
                </Map>
            </div >
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAR8n5YnE8w6L8R7d8KEev8U58KUubp6sE')
})(MapContainer)