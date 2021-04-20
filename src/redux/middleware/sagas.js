import axios from "axios"
import { all, put, takeLatest } from "redux-saga/effects"
import types from "../action"

function* mangaRequestWatcher() {
    yield takeLatest(types.MANGA_REQUEST, mangaRequestWorker)
}

function* mangaRequestWorker() {
    try {
        const url = "https://mangamint.kaedenoki.net/api/manga/page/4"
        const response = yield axios.get(url)

        const manga = response.data.manga_list
        yield put({ type: types.MANGA_SUCCESS, manga }) //bisa disingkat manganya
        // yield put({ type: types.MANGA_SUCCESS, manga: manga })

    } catch (err) {
        yield put({ type: types.MANGA_FAILURE })
    }
}

function* rootSaga() {
    yield all([mangaRequestWatcher()])
}

export default rootSaga