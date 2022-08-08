import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import Table from './components/MainTable';
import { useDispatch, useSelector } from 'react-redux'
import { fetchLoading, fetchSuccess } from './store/ListData'
import { getListData } from './api';
import { mappingListData } from './helper';
// import './App.css';
import InputType from './components/InputType';


const genderOptions = [
  {
    label: 'Male',
    value: 'male'
  },
  {
    label: 'Female',
    value: 'female'
  }
]

function App() {
  const [hitParams, setHitParams] = useState({
    keyword: 'michael',
    gender: ''
  })
  const handleSelectFilter = (filter) => {
    setHitParams({
      ...hitParams,
      ...filter,
    })
  }
  const dispatch = useDispatch()
  const { loading, data } = useSelector(state => state.listData)
  useEffect(() => {
    dispatch(fetchLoading())
    getListData(hitParams).then(response => {
      const normalizeData = mappingListData(response.data.results)
      dispatch(fetchSuccess(normalizeData))
    })
    .catch(err => {
      dispatch(fetchSuccess([]))
    })
  }, [hitParams])
  return (
      <div className="App">
        <header className="App-header">
        <Grid container spacing='16'>
          
          <Grid item>
            <InputType
              type='text'
              label='Search'
              handleChange={(event) => handleSelectFilter({gender: event.target.value})}
            />
          </Grid>
          <Grid item>
            <InputType
              type='select'
              label='Gender'
              options={genderOptions}
              value={hitParams.gender}
              handleChange={(value) => handleSelectFilter({gender: value})}
            />
          </Grid>
        </Grid>
        </header>
        <div>
          <Table data={data} loading={loading}/>
        </div>
      </div>
  );
}

export default App;
