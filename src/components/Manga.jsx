// import { useEffect } from "react"
import { connect } from "react-redux"
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"
import types from "../redux/action"

const Manga = (props) => {
    console.log(props);

    // useEffect(() => {
    //     props.getManga()
    // }, [])

    return (
        <>
            <div className="row">
                <h2>Manga List</h2>
                <Button className="ml-3" color="primary" onClick={props.getManga}>Tampilkan Manga</Button>
            </div>
            <div className="row mt-3">
                {/* {props.isLoading && <p>Loading...</p>}
            {!props.isLoading && (
                <ul>
                    {props.manga && props.manga.map((data, i) => <li key={i}>{data.title}</li>)}
                </ul>
            )} */}

                {props.isLoading && <p>Loading...</p>}
                {!props.isLoading && (
                    props.manga && props.manga.map((data, i) => (
                        <div className="col-3" key={i}>
                            <Card>
                                <CardImg top width="100%" src={data.thumb} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle tag="h5">{data.title}</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">{data.chapter}</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </CardBody>
                            </Card>
                        </div>
                    ))
                )}
            </div>
        </>
        
    )
}

// const reduxDispatch = (dispatch) => {
//   return {
//     getmanga: () => dispatch({ type: types.MANGA_REQUEST })
//   }
// }

const reduxDispatch = (dispatch) => ({
    getManga: () => dispatch({ type: types.MANGA_REQUEST })
})

// const reduxState = (globalState) => {
//   return{
//     manga: globalState.manga,
//     isLoading: globalState.isLoading
//   }
// }

const reduxState = (globalState) => ({
    manga: globalState.manga,
    isLoading: globalState.isLoading
})

export default connect(reduxState, reduxDispatch)(Manga)