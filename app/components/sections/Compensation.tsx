import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const Compensation = () => {
    return (
        <section id="compensation" className="py-16">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12">Compensation Structure</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Base Salary</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-gray-600">
                                <li>Competitive base pay</li>
                                <li>Monthly guaranteed income</li>
                                <li>Regular salary reviews</li>
                                <li>Performance-based increases</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Commission Structure</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-gray-600">
                                <li>Tiered commission rates</li>
                                <li>Uncapped earning potential</li>
                                <li>Monthly commission payouts</li>
                                <li>Accelerator bonuses</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Benefits Package</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-gray-600">
                                <li>Health insurance</li>
                                <li>401(k) matching</li>
                                <li>Paid time off</li>
                                <li>Professional development</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default Compensation 