import Auth from "components/Auth";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={ queryClient }>
        <Auth/>
    </QueryClientProvider>
  );
}

export default App;
