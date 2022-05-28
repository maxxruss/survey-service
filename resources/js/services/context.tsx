import React from "react";

type Props = object;

const { Provider: ServiceProvider, Consumer: ServiceConsumer } =
    React.createContext({} as Props);

export { ServiceProvider, ServiceConsumer };
