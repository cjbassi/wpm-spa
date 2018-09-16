extern crate rand;

mod quicksort;

use quicksort::quicksort;
use rand::distributions::Alphanumeric;
use rand::{thread_rng, Rng};
use std::iter;

fn main() {
    let ints = &mut random_int_array(1000000);
    let strings = &mut random_string_array(50, 5);
    quicksort(ints);
    // println!("{:?}", ints);
}

fn random_int_array(len: usize) -> Vec<i32> {
    let mut res = Vec::with_capacity(len);
    let mut rng = thread_rng();
    for _ in 0..len {
        res.push(rng.gen::<i32>());
    }
    res
}

fn random_string_array(len: usize, word_len: usize) -> Vec<String> {
    let mut res = Vec::with_capacity(len);
    let mut rng = thread_rng();
    for _ in 0..len {
        let chars: String = iter::repeat(())
            .map(|()| rng.sample(Alphanumeric))
            .take(word_len)
            .collect();
        res.push(chars);
    }
    res
}
