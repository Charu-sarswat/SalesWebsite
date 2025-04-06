import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const EarningPotential = () => {
    return (
        <section id="earnings" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12">Earning Potential</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <Card className="text-center">
                        <CardHeader>
                            <CardTitle>Entry Level</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-4xl font-bold text-primary mb-4">$50K-$75K</div>
                            <ul className="text-gray-600 space-y-2">
                                <li>Base: $40K-$50K</li>
                                <li>Commission: $10K-$25K</li>
                                <li>First Year Target</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="text-center">
                        <CardHeader>
                            <CardTitle>Mid Level</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-4xl font-bold text-primary mb-4">$75K-$120K</div>
                            <ul className="text-gray-600 space-y-2">
                                <li>Base: $60K-$80K</li>
                                <li>Commission: $15K-$40K</li>
                                <li>2-4 Years Experience</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="text-center">
                        <CardHeader>
                            <CardTitle>Senior Level</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-4xl font-bold text-primary mb-4">$120K+</div>
                            <ul className="text-gray-600 space-y-2">
                                <li>Base: $90K-$120K</li>
                                <li>Commission: $30K-$100K+</li>
                                <li>5+ Years Experience</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default EarningPotential 