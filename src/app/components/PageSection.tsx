interface PageSectionProps {
    heading: string;
    children: React.ReactNode;
}

const PageSection = ({ heading, children }: PageSectionProps) => {
    return (
        <section className="flex flex-col gap-4">
            <h2 className="text-xl">{heading}</h2>
            {children}
        </section>
    );
};

export { PageSection };
