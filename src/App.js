import './App.css';
import StateComponent from './components/useStateComponent';
import UseEffectComponent from './components/useEffectComponent';
import Separator from './components/Separator';
import FunctionContextComponent from './components/FunctionContextComponent';
import { ThemeProvider } from './ThemeContext';

function App() {
	return (
		<>
			<h1>React HOOKS</h1>
			<StateComponent />
			<Separator />
			<UseEffectComponent />
      <Separator />
			<ThemeProvider>
				<FunctionContextComponent />
			</ThemeProvider>
		</>
	);
}

export default App;
