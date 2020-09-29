import React, { lazy } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout,
  CChart,
  CWidgetIcon,
  CWidgetProgress
} from '@coreui/react'

import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

import CIcon from '@coreui/icons-react'


import MainChartExample from '../charts/MainChartExample.js'
import MapChart from '../charts/MapChart.js'

import './ProgbarsStyle.css'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Dashboard = () => {
  return (
    <>
      <CRow>

        <CCol md='8'>
          <CCard>
            <CCardBody>
              <h4 id="traffic" className="card-title mb-0">Intel Inc., Global Summary</h4>
              <CRow>
                <CCol md='8'>
                  <MapChart/>
                </CCol>

                <CCol md='4'>
                <div>
                  <div className={'row mt-2'}>
                    <div className={'col-12'}>
                      <CWidgetIcon text="total assets" header="35657" color="primary">
                        <CIcon name={'cilSpeedometer'} size={'xl'}/>
                      </CWidgetIcon>
                    </div>
                  </div>
                  <div className={'row mt-2'}>
                    <div className={'col-12'}>
                      <CWidgetIcon text="total entitlements" header="245219735" color="danger">
                        <CIcon name={'cilSettings'} size={'xl'}/>
                      </CWidgetIcon>
                    </div>
                  </div>
                  <div className={'row mt-2'}>
                    <div className={'col-12'}>
                      <CWidgetIcon text="compliance" header="1385891298" color="warning">
                        <CIcon name={'cilGrid'} size={'xl'}/>
                      </CWidgetIcon>
                    </div>
                  </div>
                 </div>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>

     <CCol md='4'>
      <CWidgetProgress className='progbar'
        header="5643"
        text="Users"
        footer="25% increase in 30 days"
        color="warning"
        value="50"
      />
      <CWidgetProgress className='progbar'
        header="1224"
        text="Employees"
        footer="33% increase in 30 days"
        color="info"
        value="25"
      />
      <CWidgetProgress className='progbar'
        header="876543"
        text="Assets"
        footer="82% increase in 30 days"
        color="primary"
        value="75"
      />
      </CCol>
      </CRow>


      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">All Assets</h4>
              <div className="small text-muted">November 2017</div>
            </CCol>
            <CCol sm="7" className="d-none d-md-block">
              <CButton color="primary" className="float-right">
                <CIcon name="cil-cloud-download"/>
              </CButton>
              <CButtonGroup className="float-right mr-3">
                {
                  ['Day', 'Month', 'Year'].map(value => (
                    <CButton
                      color="outline-secondary"
                      key={value}
                      className="mx-0"
                      active={value === 'Month'}
                    >
                      {value}
                    </CButton>
                  ))
                }
              </CButtonGroup>
            </CCol>
          </CRow>
          <MainChartExample style={{height: '300px', marginTop: '10px'}}/>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Dashboard
