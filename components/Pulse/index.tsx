import { MotiView } from 'moti'

const bgVariant = {
    even: "bg-blue-400 border-blue-500",
    odd: "bg-blue-300 border-blue-400"
}
export default function Pulse({ id }: { id: number }) {

    const bg = bgVariant[id % 2 == 0 ? "even" : "odd"];

    return (
        <MotiView
            from={{
                opacity: 1,
                scale: 1
            }}
            animate={{
                opacity: 0,
                scale: 3,

            }}
            delay={300 * id}
            transition={{ loop: true, duration: 1500, repeatReverse: false }}
            className={`w-20 h-20 border-2 rounded-full absolute ${bg}`} />
    )
}