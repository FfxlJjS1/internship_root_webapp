import React, { Component } from 'react'
import {
  Navbar,
  Nav,
  Container,
  DropdownButton,
  Dropdown
} from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import logo from './logo.png'

import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Home = React.lazy(() =>
  import('oil_tanks_reactapp/Home').catch(props => {
    return { default: () => <>Component unavailable!</> }
  })
)
const Cistern = React.lazy(() =>
  import('oil_tanks_reactapp/Cistern').catch(props => {
    return { default: () => <>Component unavailable!</> }
  })
)
const Calculator = React.lazy(() =>
  import('oil_tanks_reactapp/Calculator').catch(props => {
    return { default: () => <>Component unavailable!</> }
  })
)
const Park = React.lazy(() =>
  import('oil_tanks_reactapp/Park').catch(props => {
    return { default: () => <>Component unavailable!</> }
  })
)
const CalculatorV2 = React.lazy(() =>
  import('oil_tanks_reactapp/CalculatorV2').catch(props => {
    return { default: () => <>Component unavailable!</> }
  })
)
const ParkV2 = React.lazy(() =>
  import('oil_tanks_reactapp/ParkV2').catch(props => {
    return { default: () => <>Component unavailable!</> }
  })
)
const StructuralAnalysis = React.lazy(props =>
  import('oil_tanks_reactapp/StructuralAnalysis').catch(() => {
    return { default: () => <>Component unavailable!</> }
  })
)

const DisplaySheme = React.lazy(props =>
  import('display_sheme_reactapp/Home').catch(() => {
    return { default: () => <>Component unavailable!</> }
  })
)

export default class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={this.props.className}>
        <Navbar expand="md" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                height="40"
                width="40"
                className="d-inline-block align-top"
                alt="Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Главное меню</Nav.Link>
                <Nav.Link href="/cistern">Резервуар</Nav.Link>

                <DropdownButton
                  as={Nav.Item}
                  title="Онлайн калькулятор"
                  id="basic-nav-dropdown"
                  menuAlign="right"
                  variant="dark"
                >
                  <Dropdown.Item href="/calculator">
                    Расчет резервуара
                  </Dropdown.Item>
                  <Dropdown.Item href="/park">Расчет по парку</Dropdown.Item>
                  <Dropdown.Item href="/calculator_v2">
                    Оптимальный расчет резервуара
                  </Dropdown.Item>
                  <Dropdown.Item href="/parkv2">
                    Оптимальный расчет по парку
                  </Dropdown.Item>
                  <Dropdown.Item href="/structural_analysis">
                    Расчет конструкции
                  </Dropdown.Item>
                </DropdownButton>

                <Nav.Link
                  style={{
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 15,
                    textAlign: 'left',
                    border: 'solid',
                    borderStyle: 'dotted',
                    margin: '5px',
                    padding: '3px'
                  }}
                  href="/display_sheme_injection"
                >
                  Схема сбора
                </Nav.Link>
                <Nav.Link
                  style={{
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 15,
                    textAlign: 'left',
                    border: 'solid',
                    borderStyle: 'dotted',
                    margin: '5px',
                    padding: '3px'
                  }}
                  href="/flow_control_diagram"
                >
                  Схема ППД
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cistern" element={<Cistern />} />
            <Route exact path="/calculator" element={<Calculator />} />
            <Route exact path="/park" element={<Park />} />
            <Route
              exact
              path="/calculator_v2"
              element={<CalculatorV2 containerWidth="1000px" />}
            />
            <Route
              exact
              path="/parkv2"
              element={<ParkV2 containerWidth="1000px" />}
            />
            <Route
              exact
              path="/structural_analysis"
              element={<StructuralAnalysis containerWidth="1200px" />}
            />
            <Route
              exact
              path="/display_sheme_injection"
              element={<DisplaySheme is_injection_in_classification={true} />}
            />
            <Route
              exact
              path="/flow_control_diagram"
              element={<DisplaySheme is_injection_in_classification={false} />}
            />
          </Routes>
        </Router>
      </div>
    )
  }
}
