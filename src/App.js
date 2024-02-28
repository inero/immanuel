import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Footer } from './components/Footer/Footer';
import EMICalculator from "./components/Calculator/EMICalculator/EMICalculator";
import PercentageCalculator from "./components/Calculator/PercentageCalculator/PercentageCalculator";
import About from './components/About/About';
import {
  Grid,
  GridColumn,
  GridRow,
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <Router>
      <Grid>
        <GridRow>
          <GridColumn>
            <Navigation />
          </GridColumn>
        </GridRow>
        <GridRow centered>
          <GridColumn centered style={{'padding-bottom': '100px'}} mobile={12} tablet={12} computer={12}>
            <Routes>
              <Route index element={<Dashboard />} />
              <Route path="/immanuel" element={<Dashboard />} />
              <Route path="/about" element={<About />} />
              <Route path="/emi" element={<EMICalculator />} />
              <Route path="/percentage" element={<PercentageCalculator />} />
            </Routes>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn>
            <Footer/>
          </GridColumn>
        </GridRow>
      </Grid>
    </Router>
  );
}

export default App;
