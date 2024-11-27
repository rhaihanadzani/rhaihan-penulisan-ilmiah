export const Statistics = () => {
    const stats = [
        {
            quantity: "500+",
            description: "Santri Aktif",
        },
        {
            quantity: "300+",
            description: "Hafalan Qur'an Selesai",
        },
        {
            quantity: "50+",
            description: "Pengajar Berkualitas",
        },
    ];

    return (
        <section id="statistics" className="mt-8">
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-8  p-6 rounded-lg">
                    {stats.map(({ quantity, description }) => (
                        <div
                            key={description}
                            className="space-y-2 text-center"
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold">
                                {quantity}
                            </h2>
                            <p className="text-sm md:text-xl text-muted-foreground">
                                {description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
