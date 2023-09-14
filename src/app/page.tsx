import Image from 'next/image';
import { HeaderRow } from './components/HeaderRow';
import { PageSection } from './components/PageSection';
import { SettingsCard } from './components/SettingsCard';
import { IntegrationsCard } from './components/IntegrationsCard';
import { getIntegrations, getSettings } from './dataStore';

export default function Home() {
    const settings = getSettings();
    const integrations = getIntegrations();
    return (
        <main className="flex flex-col justify-between gap-8 px-8 py-4 sm:px-12 md:px-24">
            <HeaderRow />
            <PageSection heading="Settings">
                <p className="text-sm text-gray-500">
                    Edit abilities of blue receipt.{' '}
                    <a href="#">Profile settings</a>
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {settings.map((setting, i) => (
                        <SettingsCard key={`setting-${i}`} setting={setting} />
                    ))}
                </div>
            </PageSection>
            <PageSection heading="Integrations">
                <p className="text-sm text-gray-500">
                    Layer in connections. <a href="#">See more</a>
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {integrations.map((integration, i) => (
                        <IntegrationsCard
                            key={`integration-${i}`}
                            integration={integration}
                        />
                    ))}
                </div>
            </PageSection>
        </main>
    );
}
