#include<bits/stdc++.h>
using namespace std;
void rotate(vector<int>& nums, int k) {
    int n = nums.size();
    while(k>=0){
        int last = nums[n-1];
        for(int i = n-1; i >= 1; i--){
            nums[i] = nums[i-1];
        }
        nums[0] = last;
        k--;
    }
}

int main(){
    vector<int> arr = {1,2,3,4,5,6,7};
    for(auto it: arr){
        cout<<it<<" ";
    }
    cout<<endl;

    int k = 3;
    rotate(arr,k);
    for(auto it: arr){
        cout<<it<<" ";
    }
}