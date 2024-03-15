#include <iostream>
#include <vector>
#include <algorithm>
#include <climits>
using namespace std;

int main() {
    int N, M, B;
    cin >> N >> M >> B;
    vector<vector<int>> ground(N, vector<int>(M));
    int min_height = 256, max_height = 0;

    for (int i = 0; i < N; ++i) {
        for (int j = 0; j < M; ++j) {
            cin >> ground[i][j];
            min_height = min(min_height, ground[i][j]);
            max_height = max(max_height, ground[i][j]);
        }
    }

    int result_time = INT_MAX, result_height = 0;
    for (int h = min_height; h <= max_height; ++h) {
        int time = 0, inventory = B;
        for (int i = 0; i < N; ++i) {
            for (int j = 0; j < M; ++j) {
                int diff = ground[i][j] - h;
                if (diff > 0) {
                    time += 2 * diff;
                    inventory += diff;
                } else if (diff < 0) {
                    time += -diff;
                    inventory += diff;
                }
            }
        }
        if (inventory >= 0 && time <= result_time) {
            result_time = time;
            result_height = h;
        }
    }

    cout << result_time << " " << result_height << endl;
    return 0;
}
