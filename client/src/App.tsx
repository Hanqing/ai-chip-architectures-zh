import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import AdditionalArticle from "./pages/AdditionalArticle";
import Home from "./pages/Home";
import Writing from "./pages/Writing";


function AppRouter() {
  return (
    <Router base={import.meta.env.BASE_URL}>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/writing"} component={Writing} />
        <Route path={"/principles-of-computer-architecture"} component={AdditionalArticle} />
        <Route path={"/how-to-design-a-chip"} component={AdditionalArticle} />
        <Route path={"/how-to-learn"} component={AdditionalArticle} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

// 原站复刻：通过模板的主题上下文同步正文、目录、表格与图形的浅/深色状态。

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        switchable
      >
        <TooltipProvider>
          <Toaster />
          <AppRouter />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
