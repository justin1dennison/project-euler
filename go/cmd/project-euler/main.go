/*
Copyright 2016 The Kubernetes Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

package main

import "fmt"

func main() {
	problem_one()
}


func problem_one(){
	start := 1
	stop := 1000
	step := 1
	sum := 0
	for i := start; i < stop; i += step {
		if i % 3 == 0 || i % 5 == 0 {
			sum += i;	
		}
	}
	fmt.Printf("Problem One: %d", sum)
}
