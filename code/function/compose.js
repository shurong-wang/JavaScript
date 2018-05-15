function compose(...functors) {
    return functors.reduceRight((a, b) => b(a));
}
