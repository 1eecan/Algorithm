class Heap {
    constructor() {
        this.values = [];
    }
    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element >= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    extract() {
        const first = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return first;
    }
    sinkDown() {
        let idx = 0;
        while (true) {
            let parent = this.values[idx];
            let length = this.values.length;
            const leftChildIdx = idx * 2 + 1;
            const rightChildIdx = idx * 2 + 2;
            let swap = null;
            if (leftChildIdx < length) {
                if (this.values[leftChildIdx] < parent) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                if (
                    (this.values[rightChildIdx] < parent && swap === null) ||
                    (swap !== null && this.values[rightChildIdx] < this.values[swap])
                ) {
                    swap = rightChildIdx;
                }
            }
        if (swap === null) break;
        this.values[idx] = this.values[swap];
        this.values[swap] = parent;
        idx = swap;
        }
    }
}

function solution(scoville, K) {
    let answer = 0;
    const heap = new Heap();
    scoville.forEach(el=>heap.insert(el));
    while(heap.values.length>1){
        if(heap.values[0]>=K) return answer;
        const first = heap.extract();
        const second = heap.extract();
        const newScoville = first + second * 2;
        heap.insert(newScoville);
        answer++;
    }
    
    return heap.values[0] >= K ? answer : -1;
}