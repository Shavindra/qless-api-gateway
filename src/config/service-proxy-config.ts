import { servicesConfig } from './services-config';

const proxyConfigModel = (endpointName: string, port: string) => {
    return {
        name: endpointName,
        port: port,
        apiPath: '/v1/' + endpointName,
        config: {
            target: 'http://localhost:' + port,
            changeOrigin: true,
            pathRewrite: {
                ['^/v1/' + endpointName]: '/' + endpointName
            }
        }
    };
};

const generateProxyConfig = (config: any) => {
    const configList: any[] = [];
    config.forEach((service: any) => {
        const proxyConfig = proxyConfigModel(service.name, service.port);
        configList.push(proxyConfig);
    });
    return configList;
};

export const serviceProxyConfigs = generateProxyConfig(servicesConfig);
