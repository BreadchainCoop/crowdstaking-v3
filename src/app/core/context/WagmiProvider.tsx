import { ReactNode, useEffect, useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { WagmiProvider as WagmiProviderLib } from "wagmi";

import { getConfig, WagmiMockFeatures } from "@/app/wagmiConfig";
import { reconnect } from "wagmi/actions";

const initialState = {
  wagmiMockFeatures: {
    connectError: false,
    reconnect: true,
  },
};

const rqClient = new QueryClient();

export function WagmiProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<{ wagmiMockFeatures: WagmiMockFeatures }>(
    initialState
  );
  const config = getConfig(state.wagmiMockFeatures);

  useEffect(() => {
    document.addEventListener("wagmiConfigLoaded", () => {
      console.log("boom: ", window.wagmiMockFeatures);
      setState({ wagmiMockFeatures: window.wagmiMockFeatures });
    });
  });

  return (
    <WagmiProviderLib config={config}>
      <QueryClientProvider client={rqClient}>
        {/* {process.env.TEST_ENV && (
          <div className="fixed bottom-0 left-0 right-0 py-8 bg-red-300">
            <span className="text-red-950 font-bold">dev tools</span>
            <form>
              <div>
                <label htmlFor="connectError">connectError</label>
                <input
                  type="checkbox"
                  name="connectError"
                  id="connectError"
                  // checked={state.wagmiMockFeatures.connectError}
                  onChange={(event) => {
                    console.log(event.target.value);
                    setState((state) => ({
                      ...state,
                      wagmiMockFeatures: {
                        connectError: true,
                      },
                    }));
                  }}
                  data-test="mock-toggle-connect-error"
                />
              </div>
            </form>
          </div>
        )} */}
        {children}
      </QueryClientProvider>
    </WagmiProviderLib>
  );
}

function MockConfigControl() {
  return (
    <section>
      <input
        type="checkbox"
        name="connectError"
        id="connectError"
        data-test="wagmi-connect-error"
      />
    </section>
  );
}
